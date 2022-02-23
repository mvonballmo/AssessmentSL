using System;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using NUnit.Framework;
using Snapshooter.NUnit;

namespace Core.Tests;

public class ArticleReaderTests
{
    [Test]
    public async Task TestGetArticles()
    {
        var provider = CreateProvider();
        var articleReader = provider.GetRequiredService<ArticleReader>();

        var articles = await articleReader.GetArticles();
        
        Snapshot.Match(articles);
    }

    private IServiceProvider CreateProvider()
    {
        var services = new ServiceCollection();

        services
            .AddSingleton<HttpClient>()
            .AddSingleton<ArticleReader>();

        return services.BuildServiceProvider();
    }
}