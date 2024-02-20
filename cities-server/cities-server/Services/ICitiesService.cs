using cities_server.Models;

namespace cities_server.Services
{
    public interface ICitiesService
    {
        IEnumerable<City> GetCities();
        void AddCity(City city);

    }
}
