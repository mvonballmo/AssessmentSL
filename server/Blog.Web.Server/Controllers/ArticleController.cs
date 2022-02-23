using Core;
using Microsoft.AspNetCore.Mvc;

namespace Blog.Web.Server.Controllers;

[ApiController]
[Route("[controller]")]
public class ArticleController : ControllerBase
{
    private readonly IArticleReader _articleReader;
    private readonly IArticlePersistence _articlePersistence;
    private readonly ILogger<ArticleController> _logger;

    public ArticleController(IArticleReader articleReader, IArticlePersistence articlePersistence, ILogger<ArticleController> logger)
    {
        _articleReader = articleReader;
        _articlePersistence = articlePersistence;
        _logger = logger;
    }

    [HttpGet(Name = "GetArticles")]
    public Task<IEnumerable<Article>?> Get()
    {
        return _articleReader.GetArticles();
    }

    [HttpPost("Rate/{id}/{rating}")]
    public async Task<IActionResult> Rate(int id, int rating)
    {
        if (!await _articlePersistence.TryGetAnnotation(id, out var articleAnnotation))
        {
            return NotFound();
        }

        await _articlePersistence.SaveAnnotation(articleAnnotation! with { Rating = rating });
        
        return Ok();
    }
    
    [HttpPost("AddComment{id}/{comment}")]
    public async Task<IActionResult> AddComment(int id, string comment)
    {
        if (!await _articlePersistence.TryGetAnnotation(id, out var articleAnnotation))
        {
            return NotFound();
        }
    
        var newComments = new List<string>(articleAnnotation!.Comments)
        {
            comment
        };
    
        var commentedAnnotation = articleAnnotation! with { Comments = newComments };
        
        await _articlePersistence.SaveAnnotation(commentedAnnotation);
        
        return Ok();
    }
}
