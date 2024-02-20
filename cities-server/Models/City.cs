using System.ComponentModel.DataAnnotations;

namespace cities_server.Models
{
    public class City
    {
        public int Id { get; set; }

        //Client-side validations
        [Required(ErrorMessage = "City name is required.")]
        [StringLength(20, MinimumLength = 3, ErrorMessage = "City name must be between 3 and 30 characters.")]
        public string? Name { get; set; }

        [Required(ErrorMessage = "Number of people is required.")]
        [Range(0, int.MaxValue, ErrorMessage = "Number of people must be a non-negative value.")]
        public int? NumberOfPeople { get; set; }
    }
}
