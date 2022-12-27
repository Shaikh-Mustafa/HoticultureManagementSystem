﻿using HMS_BackEnd.Models;
using Microsoft.EntityFrameworkCore;

namespace HMS_BackEnd.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
    }
}
