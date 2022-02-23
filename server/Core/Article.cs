using System.Data.Common;

namespace Core;

public record Article(
    int Id, bool Featured, string? Title, string? ImageUrl
);