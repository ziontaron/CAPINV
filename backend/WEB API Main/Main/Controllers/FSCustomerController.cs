﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ReusableWebAPI.Controllers
{
    public class FSCustomerController : ApiController
    {
        // GET: api/FSCustomer
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/FSCustomer/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/FSCustomer
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/FSCustomer/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/FSCustomer/5
        public void Delete(int id)
        {
        }
    }
}
