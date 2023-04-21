using System.ComponentModel.DataAnnotations;

namespace HMS_BackEnd.Models
{
    public class FarmOwner
    {
        // we are not making any dto.. as we have less time..
        [Key]
        public int FarmOwnerId { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string location { get; set; }
        public string farmType { get; set; }
        public string password { get; set; }
        public string phone { get; set; }
        public string email { get; set; }
       
    }
}

