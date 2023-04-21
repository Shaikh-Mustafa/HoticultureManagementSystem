using System.ComponentModel.DataAnnotations;

namespace HMS_BackEnd.Models
{
    public class buyer
    {
        // we are not making any dto.. as we have less time..

        [Key]
        public int buyerId { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string password { get; set; }
        public string phone { get; set; }
        public string email { get; set; }       
    }
}
