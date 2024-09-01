using Microsoft.EntityFrameworkCore;
using RESTAPI.Endpoints;
using RESTAPI.Entities;

namespace RESTAPI.Data;

public class GameStoreContext(DbContextOptions<GameStoreContext> options) : DbContext(options)
{
    public DbSet<Game> Games => Set<Game>();
    
    public DbSet<Genre> Genre => Set<Genre>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Genre>().HasData(
            new { Id = 1, Name = "Fighting"},
            new { Id = 2, Name = "Role Playing"},
            new { Id = 3, Name = "Sports"},
            new { Id = 4, Name = "Racing"},
            new { Id = 5, Name = "Survival"}
        );
    }
}