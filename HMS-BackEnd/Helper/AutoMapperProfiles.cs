using AutoMapper;
using HMS_BackEnd.DTO;
using HMS_BackEnd.Models;

namespace HMS_BackEnd.Helper
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User,UserDTO>().ReverseMap();
        }
    }
}
