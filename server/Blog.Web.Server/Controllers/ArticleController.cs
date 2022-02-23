using Core;
using Microsoft.AspNetCore.Mvc;

namespace Blog.Web.Server.Controllers;

[ApiController]
[Route("[controller]")]
public class ArticleController : ControllerBase
{
    private readonly IArticleReader _articleReader;
    private readonly ILogger<ArticleController> _logger;

    public ArticleController(IArticleReader articleReader, ILogger<ArticleController> logger)
    {
        _articleReader = articleReader;
        _logger = logger;
    }

    [HttpGet(Name = "GetArticles")]
    public Task<IEnumerable<Article>?> Get()
    {
        return _articleReader.GetArticles();
    }
}