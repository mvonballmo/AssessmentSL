FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["Blog.Web.Server/Blog.Web.Server.csproj", "Blog.Web.Server/"]
RUN dotnet restore "Blog.Web.Server/Blog.Web.Server.csproj"
COPY . .
WORKDIR "/src/Blog.Web.Server"
RUN dotnet build "Blog.Web.Server.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Blog.Web.Server.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Blog.Web.Server.dll"]
