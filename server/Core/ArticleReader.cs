using System.Text.Json;

namespace Core;

public class ArticleReader
{
    private readonly HttpClient _httpClient;

    public ArticleReader(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }
    
    public async Task<IEnumerable<Article>?> GetArticles()
    {
        var response = await _httpClient.GetAsync("https://api.spaceflightnewsapi.net/v3/articles");

        response.EnsureSuccessStatusCode();

        var stream = await response.Content.ReadAsStreamAsync();

        return await JsonSerializer.DeserializeAsync<IEnumerable<Article>>(stream);
    }
}