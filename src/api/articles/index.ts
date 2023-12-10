import axios from "axios";

class Get {
    public async execute(articleId: string) {
        const response = await axios.get(
            "https://kumamoto-blog.microcms.io/api/v1/blogs/" + articleId,
            {
                headers: {"X-API-KEY": import.meta.env.VITE_HEADLESS_CMS_API_KEY}
            }
        );
        const res =  response.data;
        return {
            articleId: res.id,
            title: res.title,
            imgUrl: res.eyecatch.url,
            content: res.content,
            publishedAt: res.publishedAt,
        }
    }
}
export default new Get();
