using System.Net.Http.Headers;
using System.Security.AccessControl;
using System.ComponentModel;
using System;
namespace API.Extensions
{
    public static class DateTimeExtensions
    {
        public static int CalculateAge(this DateTime dob)
        {
        var today = DateTime.Today;
        var age  = today.Year - dob.Year;
        if(dob.Date > today.AddYears(-age)) age--;
        return age;
        }

    }
}