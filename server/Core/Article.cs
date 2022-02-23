namespace Core;

public record Article(int Id, string? Title, string? ImageUrl, int Rating)
{
    public IList<string> Comments { get; } = new List<string>();
};