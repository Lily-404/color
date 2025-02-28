import axios from 'axios';

export const generateColorScheme = async (description) => {
  const url = "https://api.moonshot.cn/v1/chat/completions";
  const prompt = `请生成一个包含5种颜色的配色方案，基于以下描述：${description}\n\n严格要求：\n1. 必须直接返回一个JSON数组，不要包含任何其他文字说明\n2. 数组必须包含5个对象，每个对象具有hex和name两个属性\n3. hex必须是6位十六进制颜色代码，包含#前缀\n4. name必须是简短的中文颜色名称\n5. 返回格式示例：\n[{\"hex\":\"#FF0000\",\"name\":\"经典红\"},{\"hex\":\"#00FF00\",\"name\":\"翠绿\"},{\"hex\":\"#0000FF\",\"name\":\"深蓝\"},{\"hex\":\"#FFFF00\",\"name\":\"明黄\"},{\"hex\":\"#FF00FF\",\"name\":\"紫红\"}]`;

  const params = {
    model: "moonshot-v1-32k",
    messages: [
      {
        role: "user",
        content: prompt,
        max_tokens: 8192,
      },
    ],
  };

  try {
    const response = await axios.post(url, params, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer 填写自己的KEY`,
      },
    });

    const content = response.data.choices[0].message.content;
    return JSON.parse(content);
  } catch (error) {
    console.error("调用API失败:", error);
    throw new Error("生成配色方案失败，请稍后重试");
  }
};