namespace Blog.Web.Server.Controllers;

class ArticlePersistence : IArticlePersistence
{
    public Task<bool> TryGetAnnotation(int id, out ArticleAnnotation? articleAnnotation)
    {
        // TODO Get from database
        
        articleAnnotation = null;
        
        return Task.FromResult(false);
    }

    Task IArticlePersistence.SaveAnnotation(ArticleAnnotation articleAnnotation)
    {
        // TODO Save to database
        
        return Task.CompletedTask;
    }
}