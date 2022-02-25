namespace Blog.Web.Server.Controllers;

class ArticlePersistence : IArticlePersistence
{
    public Task<bool> TryGetAnnotation(int id, out ArticleAnnotation? articleAnnotation)
    {
        // TODO Get from database

        articleAnnotation = new ArticleAnnotation(id, 0, new List<string>());
        
        return Task.FromResult(true);
    }

    public Task SaveAnnotation(ArticleAnnotation articleAnnotation)
    {
        // TODO Save to database
        
        return Task.CompletedTask;
    }
}