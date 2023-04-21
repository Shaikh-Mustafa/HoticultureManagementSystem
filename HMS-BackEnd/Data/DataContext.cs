using HMS_BackEnd.Models;
using Microsoft.EntityFrameworkCore;

namespace HMS_BackEnd.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }

        public DbSet<Product> Products { get; set; }

        public DbSet<Stock> Stocks { get; set; }

        public DbSet<FarmOwner> FarmOwners { get; set; }

        public DbSet<buyer> buyers { get; set; }
    }
}
