namespace Blog.Web.Server.Controllers;

public interface IArticlePersistence
{
    Task<bool> TryGetAnnotation(int id, out ArticleAnnotation? articleAnnotation);

    Task SaveAnnotation(ArticleAnnotation articleAnnotation);
}