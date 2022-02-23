using System;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using NUnit.Framework;

namespace Core.Tests;

public class ArticleReaderTests
{
    [Test]
    public async Task TestGetArticles()
    {
        var provider = CreateProvider();
        var articleReader = provider.GetRequiredService<ArticleReader>();

        await articleReader.GetArticles();
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