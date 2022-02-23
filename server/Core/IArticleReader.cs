namespace Core;

public interface IArticleReader
{
    Task<IEnumerable<Article>?> GetArticles();
}