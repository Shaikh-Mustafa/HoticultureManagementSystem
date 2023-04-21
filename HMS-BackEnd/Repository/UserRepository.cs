using HMS_BackEnd.Data;
using HMS_BackEnd.DTO;
using HMS_BackEnd.Interface;
using HMS_BackEnd.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HMS_BackEnd.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext datacontext;

        public UserRepository(DataContext datacontext)
        {
            this.datacontext = datacontext;
        }
        public async Task<User> Authenticate(string userName, string password)
        {
            return await datacontext.Users.FirstOrDefaultAsync(x => x.userName == userName && x.password == password);
        }

        public async Task<User> CreateUser(User user)
        {
            await datacontext.AddAsync(user);
            return user;
        }

        public Task<List<User>> GetAllUsers()
        {
            return datacontext.Users.ToListAsync();
        }
    }
}
