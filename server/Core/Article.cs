using System.Data.Common;

namespace Core;

public record Article
{
    public int Id;

    public bool Featured;

    public string? Title;

    public string? ImageUrl;

    public string? NewsSite;
}