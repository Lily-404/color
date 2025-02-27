import axios from 'axios';

export const generateColorScheme = async (description, apiKey) => {
  const url = "https://api.moonshot.cn/v1/chat/completions";
  const prompt = `请根据以下描述生成一个包含5种颜色的配色方案，每个颜色都需要提供十六进制代码和颜色名称。描述：${description}。请以JSON格式返回，格式为：[{"hex":"#XXXXXX","name":"颜色名称"}]`;

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
        Authorization: `Bearer ${apiKey}`,
      },
    });

    const content = response.data.choices[0].message.content;
    return JSON.parse(content);
  } catch (error) {
    console.error("调用API失败:", error);
    throw new Error("生成配色方案失败，请稍后重试");
  }
};