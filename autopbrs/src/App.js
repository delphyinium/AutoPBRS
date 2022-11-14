const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "your-api-key-string-goes-here",
});
const openai = new OpenAIApi(configuration);