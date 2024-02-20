using cities_server.Models;

namespace cities_server.Services
{
    public class CitiesService : ICitiesService
    {
        private List<City> _cities;

        public CitiesService()
        {
            _cities = new List<City>()
            {
                new City { Id = 1, Name = "Haifa", NumberOfPeople = 100000},
                new City { Id = 2, Name = "Tel Aviv", NumberOfPeople = 200000}
            };

        }

        public IEnumerable<City> GetCities()
        {
            return _cities;
        }

        public void AddCity(City city)
        {
            city.Id = _cities.Max(city => city.Id) + 1;
            _cities.Add(city);
        }

    }
}
