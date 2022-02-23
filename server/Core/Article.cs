using System.Data.Common;

namespace Core;

public class Article
{
    public int Id { get; set; }

    public bool Featured { get; set; }

    public string? Title { get; set; }

    public string? ImageUrl { get; set; }

    public string? NewsSite { get; set; }
}