using Blog.Web.Server.Controllers;
using Microsoft.Extensions.DependencyInjection;

namespace Core;

public static class ServiceCollectionExtensions
{
    public static IServiceCollection UseCoreServices(this IServiceCollection collection)
    {
        return collection
            .AddSingleton<HttpClient>()
            .AddSingleton<IArticleReader, ArticleReader>()
            .AddSingleton<IArticlePersistence, ArticlePersistence>();
    }
}