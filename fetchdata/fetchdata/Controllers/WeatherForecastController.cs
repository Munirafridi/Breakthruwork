using Microsoft.AspNetCore.Mvc;

namespace fetchdata.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public IActionResult Get()
        {
            
            List<insertdata> studentList = new List<insertdata>();
            var cust1 = new insertdata
            {
                Id = 1,
                Name = "Shamim",
                Age = 20,
                Address = "Karachi",
                PhoneNo = "03442944943",

            };
            var name1 = new insertdata
            {
                Id = 111,
                Name = "waqar",
                Age = 11,
                Address = "lahore",
                PhoneNo = "03442944943",
            };

            var cust2 = new insertdata
            {
                Id = 11,
                Name = "arif khan",
                Age = 22,
                Address = "Karachi",
                PhoneNo = "03442944943",


            };
            studentList.Add(name1);
            studentList.Add(cust1);
            studentList.Add(cust2);
            // same work but different way. 
            studentList.Add(
                new insertdata
                {
                    Id = 5,
                    Name = "qasim afridi",
                    Age = 29,
                    Address = "DHA",
                    PhoneNo = "03442944943",

                }

                );

            return Ok(studentList);

        }

        [HttpPost]

        public IActionResult post(insertdata student)
        {
            // todo test github
            return Ok(student);
        }
        [HttpPut]

        public IActionResult put(int id, insertdata student)
        {
            return Ok(student);
        }
    }
}
