import React, { useState, createContext } from 'react'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'
import { useContext } from 'react';


const AppContext = createContext();

const AppProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  const handleCart = (product) => {
    
      setCart([...cart, product]);
  
    alert('Added to cart successfully')

  };

  return (
    <AppContext.Provider value={{ cart, setCart, handleCart }}>
      {children}
    </AppContext.Provider>
  )
}

const Product = () => {

  const products = [
    { id: 1, name: "Iphone 15 pro max", quantity: 1, price: 1000, img: "data:image/jpeg;base64,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" },
    { id: 2, name: "Samsung S22 Ultra", quantity: 1, price: 900, img: "data:image/jpeg;base64,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" },
    { id: 3, name: "Infinix Zero 8i", quantity: 1, price: 120, img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhgREhESERISEhESERERERERERESGBgZGRgUGBgcIS4lHB4rHxgYJjgmKy8xNjU1GiRIQDszPy40NTEBDAwMEA8QHxISHjEhJCQxMTQ0MTQ0NDQxNDQ0MTE0MTQ/MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxNDQxOv/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAgMEBQYBBwj/xABTEAACAQIBBgUNCgsIAgMAAAABAgADEQQFEiExUXEGIkFhcgcTMjNSgZGUsbKz0tMUFyNTYnOSk6HBFSQ1QlRVgoOi0fAlNENEY4Th8bTCRXSk/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwQFBv/EACgRAQEAAgIBAwQCAgMAAAAAAAABAhEDMSESQVEEEzJxIrGBwQUzYf/aAAwDAQACEQMRAD8A9mhCEAhCcJgEJTVMupeyDOHxjOiUzuJ4x5NIWxvoJifw43c4fxo+pJ1Ta7hKT8ON3OH8aPs5z8Nt3OH8ab2caqNryEo/w23c4fxo+znfw23c4fxs+pGqbi7hKT8Nt3OH8ab2cPw43c4fxpvZxqm4u4Sk/Djdzh/Gm9nI+M4UJRXPq9ZVL24tdqjk7FXM0nmjVTtpITC1+qVhVYhaNVgOVq+ApX/ZesGHfAjfvnYf9HfxzJnt5A30JgffOw/6O/jmTPbzjdU/DDSaDgcpGJyc58C1ifsgb+E8+99TCfFVPrMN68776eE+JqfW4X14HoEJgT1TsP8Ao7+N5M9vOe+fh/0d/HMme3gb+EwHvn4f9HfxzJnt5LwXVEwbm1QVKFyBnM2Hqpp2tRd7DnNoG0hG6VRXUMpDKwBUg3BB5Y5AIQhAIQhAIQhA5KjhMX9zMENi2hj8gXZh31Ur+1LeVuXu0P0X8xpM7RVDkvJSBQWUMxFyW0m5luuBTuF+iJ3BLxRuEnqstlldokQPcKdwvgE77hTuF8AlhaJawBJIAAJJJsABrJOyRup0gHBUxpKqANZIAAjNBKFTRTNN9Y4tjpGzbPPuHfDQ1C+EwjqiojPXrm9kUW8LXKgLtIv8nzXg9lerhajVkrsjrxhTfPNPEcpVmB4rW0g218ojdRqPpH3CncL4BO+4E7hfAJV8EOFFHKFIOhAcCzobZwa2kEbfsOsc2jtG6nSvOBTuF8Anm3CzJyYvKHud7ilRJDIvFuKdOk7i41FmxNIX2Ids9ZKzzLFflbEdLE+iyZL8c9WUlVy8Y2xk8vZbp4Oq1ChgcJm0gmd11AGYlQ11A0kabXJJJvKyhwzZzb3DgBYX41PNvzA7Z6Hi8n0KxBq0aVQgWBemjkDYCRI4yJhBqwuGB29Yp/ynVeHLfisJyY68xzJqUa9FKww1JBURXzTSp3W/JfN079lo82Co/E0fqaf8pJ/qw1RDGbzCa8sfVdopwdH4mj9TT/lIGUaVIDMWjSz3tqpU7gE2AGjWT9m8SzdwASdQBJtrsNn9cokLDIeNXfXcrTHIG1Mw5lHFHf2Rccfhlz8/2sLlTFPAUqYzOtUi2uo3W0Izu5GjUPtN+aSKeCpH/BpfVU/5QpLfTJ9KnKZTH4ebx8mef8rbum6eAo/E0vqqf8ozlHg3hcSpVqVNHIOZVpoqMjchuts4cxuJbU6clUqekTO4432deOWcu5ae6mVd/czYd9dBqdtJNhUpq7C55A/XAOa02sxnU/7LE9Kh5rTZzhr2507CEJCRCEIBCEIHJW5e7Q/RbzGllK3L3aH6LeY0TtF6IwXYjcJOWQcF2I3CTVl8iOuwAJJAABJJ0AAayZ5dwx4b0alb3ElZ6VLStWvTUMVa3FuL3tex0aQOfsW+qXwzZahwFJzTAKivVAJzFvYkAdkRY2G0X2W80GCW3X2SquFep1sPnK9RXIJzjyM2gkrYA6geWRIWw7lXI5pVAlRwqVBnJiEBqUnXWHFtJW9r8o2HUYArrVIWs9kw9NlpqvGaobnNVTbQCxuWPJfmEk4XGqqvRqsalJCzIikgPUJsChPYA6ydg1XtZBwIoqrYimVWurNSqU2N0KkDOzSbMtyAQbHXYyfNng8DI2V6uDqrVotZlsGW5Cut7lT9x5PL9BcEOFNLKFIOpzag0PTNgwYDSCNvlGkbB85qiqjM7cfihFFuO5OsnkUAG52ldpIs8lZVfA1QQr0sShUmx+Dq02AYK661NiCGF9d+cwPpwzyrKmDFXKlcElStXEMrAkMrdYycLgggg2vpB7x1TbcEeEKZQwwrKCGHFdTa4OkabaNanwc8yWIW+VcQNPbMRqP+jk2X4vyjn+qyuPDllj3IbZ69E2qDryas9c1ag2DkV/4G2KZIo10cEowaxs2sMjdy6nSh5iAZOA0WPGU3F/KD/XgkPE5HDEVKZKsosrKc11XuQw/N0djpX5Jno+Y8Th+v345Jr/2EsYgmMGq9M5tVbjkdFP8AEg8qX51WLzwRcWIIuCCCDuI1y0u3pY545zeN3DWKu2bTXsqjX3AGwvzZ1z+7hi7CyL2KAKt9dhynn1nvmOgAV3/01zBvAzSfDnfSMjtpMifLxv8AkOX1cs457HsPTllQpyNhklpQSZZV0cGPgunSkmnS0jeIunTkimmkbxMrXdjigcAeyxPSo+a02Ux3ALs8T06PmtNjOOvUnTsIQkJEIQgEIQgclbl7tD9F/MaWUp+EVQhAo1MtbO71NyPtkztFLwXYjcJOWQcD2I3CTUk0jzHqj8DS9Q4+igqajXpEmzrpuOa9zp5L7iPLnxSdrdaho0yxVCSlUnXmNpzU062C3tyXn1AVB0EXB0EHURPJuqRwBvnYvCIb66lMajz/APPePIQlsNPNcJh8/jvSfrJzlD0wL06gtYgE8a2oqTpB13tHcMOvEDEFilNVVFUMc/ubljxVF72Gk6ucQKBRHu9MPmg2R7qufcAZ+o5oJuRo1b5sOFnAwZKopXaqMSK79ZdRS601NypdXplTosVPFOgg6tlbnJZN9mvdmMXkk4djTxKPZ6edQqpYgm4sy3sGXWCpsRfkIse5FwFTF1DSRDVrVOtor/m0lBFzYa2IGaNgJ3i94M1XrqcE1H3VSqXK07kNSqW4tRGtxDfWOUXnsPA3gpSyfSFlDVmHwj67E6wPvP3S1Id4G8HFydhhSBznY51Rr306Tb7T4dgEyzi+VsTbu8T6LJs9KM81Yf2vielifRZMl+L8ox+pm+LL9LUgcvFO3WDv29/TOBmU6LC+3Srd/kMePhjZGu2kcqmeg+az4pQ2ZU4jrmtsa1juPLKzE5Mem2fS42nOKHSGI8p+3nk5wCNo2ayP5xzD1T2JNxoAPKNP2yWeGefDluM6jEs7G93a5B1g3JO+OommXONwgqAlDmudIYdi28ajv17CNco6GKzanWqq9bqDVfsX2ZpPk8usvVqabzix58ryS+feLTDLLTDpIGHWWlATLJ38WGkumsfRdI3iNU4/T1jeJjk7MYqeAfZ4np0fNabCYrgEx67ihyXoHv2cTazkd0dhCEAhCEAhCEDkp8vJnZig2zhXF7X/AMJ5cSryz2VP9/6J5Kt6JwBuinmEnpKzBMRTU/J+8ywouGHlGyVwyuU3VccpfHucnGFxY6QdY5DCdlmjyrh7wINNmxuDRWurpXost6bow0g2ItyWNxaw06AZ5zkVMZiqnWAtWq4+DQ4hqtQYe4sc1ToD2FhfUOTlH03I9DBUqbFqdKnTYixZEVTbZcDVAoeBvBOlk+kAAGrMOO5sSL61B+/7ppoTkDpnm5/K+I6WJ9Fk2ejkzzlfyvielifRZMl+L8ox5/8AryXJEacR8iNus9F4mWKK8KZ08+jcdIinEaYHk12Nt8swywlPUHsdo5RygzmVslJiaeadDa6bjWP62Rlns+/sflDXbwSwwlVexJ4rajsO37jKZdbYcVuGfjwz2R8W9N/c9bs1OarHl2Kd/If6OpoSr4SZLJUVQBnKcxtNgQdRJ5Bz8mvkEk5IxPXKdz2S2DXFidjW8vOGHJMrZZuPbwvqm7NLZI8msbxGUMdTWN4mdbxTcAe3Yr9x/wC820xPAHt2K/cf+8205K7RCEIBCEIBCEIHJV5bsFRje4ZlGzjIym8tJT8I3tTp89dR/Cx+6FcvxpGD7UnR+8xaOVNx/wBxvA9pTozpMrw/i5b+UWFOqGFx3xsjl5WK5U3El06oYaO+Nk0sdOOW4fzp28avO3hYvOnbxu8i4nFW4qnTynZzb4k2HMTibcVdfKdnNvmBwovlWv8A7n0WTJrwZksni+VsR/uvRZMmmM9NjHk84VoCsQySSUiGSdcyeXcUB0jJWTqiRhkmkrLLFBxaXXRrFrc2z7x3hOYTE52vXqbftkmov9cnON2rwDZK+pTs2cug8o1X5jzyZ8OXl4/drcEwr0WptpIUqb6bg6ifJ3pn8BTNOsU06Rck85bRvBRmPPVk7IWItUA7oFT5R9vlicprmYnmIfwtUoEeUzms9Odj0fp8/XhLfbwskMk0xpG8Suw7yyoi9t4lcunZjFNwDUdcxJ5c6iO9ZjNnMZwDPwmKGxqJ8If+U2c5HaIQhAIQhAIQhA5KThN2FL/7C+Y8u5S8JVulM7K6n+Bx98K5dUnA9pToiBhgO0J0RONI4unPZ5hJgjlTcThiSZq3xT0rBhfl5Rsis6VgcqbiLfFXFgLHaeTdFxX0kYnFW4qnTynuf+ZEBjQiwZeY6LDgmXyUL5XxG7FeiyXNODM1kUf2xX6OK9FkuL40xynitUacSUkrMnCk0mTk9KBUpyLUSWVRZDqrNscmdwV9RZGcc198m1hIVSbYubkw8HsHYOrA6nU2OvQftjnCKrm1CbE2NM2W1759M6O8p8Ej4Xsu+IvEv1yudRAZmsQCOKmZY99796Z54/y3D6bxbP8AIwmVqQ7Nwh2VL0z/AB2vNDgcXTa1nU6tTAzLVsK/5vW7dyQ6/bdvJIxwhJuaVMm+oFWJ8KiUy45XfM7PZd8Au24rfh/JUm1mG6nSWbEaLaMKLbLK2j7ZuZwV3QQhCQkQhCAQhCByVWX1vTXmqBt1lYy1kLKvazuqeY8TtXLqq/AH4BOgJxoYA/AJ0BEMZXi6Y2dBogmDGIJm8jbEljEkwJiW3SzSFCKBiAZ28tpWnQZncifliv0cX6LJcvwZn8h/lev0MV6LJcjOdMr7ttEtAmIZokYaM1GkSqY/VeRHeb4xWxGrNIVSSazSI5m+Lnyx2couEBc/mgnwTuSUJVnP57WB2hb3P0iR+zIWNqHMFNNLuyqo2kkBe9nEd4GaKjhxTRUGpFCjntrPfNz35XPI4uPVtR2SMlNI3iTGWMldI3iR6m2h1PteI6VDzWmzmM6n/ZYnpUPNabOebe3fOnYQhISIQhAIQhA5IWVe1ndU8x5NkHK3az0ano3iK5dVXZP/ALunzaxLmdyf/d0+bXyRt5nxVTXRtmnCZwmJJnVF44TFVzoUXGgatF1Fho0Mft/4jd9OnVcX3TuIbV2OjWQUN9A2AffJ92kJBio1eKzppIjI5eUWRD/a1boYr0WS5ckyjyOf7VrdDE+iyXIznTK+7aM8YqPOM8jVHlpGDlSpI1R4VHkZ3muMVpNR5EquBpjlR5V4+sexUZzMQqrysxNgvfJA780lkm2dm1lkCj12uax7CiM1NnXGX7kJP7wTSMIxkrBDD0VpXuRdnbu6jG7t4SbcwA5I85nP6vVdryahpxGSNI3iPOYyTp74lwnqf9lielQ81pspjOp/2WJ6VDzWmznBe3bOnYQhISIQhAIQhA5IOV+1N0ano3k6QMs9qbo1PRvCL0rcnH8Xp/Np5I1UMXkw/i1P5tPJGqhmPFf9o10bJjbNOkxtmnbitICYqs97WYnvsRoFtAIFo3eIzpfS0LvOgxu8M6XxiKcJlFktrZUq9DE+iyZLjOlFgDbKdXo4j0WTIznmftnl+Nax3kapUiWeRqtSazFyio8ivUiatSRKlTnlilV61hr/AOo9wZwnXKhxDji0yVpg6jUIsW/ZU23ue5laUao4pp2TEDTqHKL8wFyd02GFpLSprTTsUFhfWTysdpJuTzmUy8+ERMZoy7RLPG3eVmKaHaNltI3icZo3nae+JZB3qf8AZYnpUPNabOYzqfa8T0qHmmbOefe3bOnYQhISIQhAIQhA5K/LfaW6NX0TywldlztLdCr6KpCL0q8lH8VpfNp5I1UMVkg/ilL5pPIIipOXhvn/ADf7W14hhjGo48bvPRxAYidzokmaxMdnLwYxJM0xiK6TKLCtbKNTo4j0WTJclpQU2tlCodq4j0OTYznmftnl+NaB3kKtUnHqyHWqzbTkKqVZEepfntybTsiKlS+iOYNM9xsHKDax5Tv1d8jZIqVxkXD5l3bSzCwOwcpG8gDco2y165K5H5BoA1AahzRxakr6UJheJLyN1yGfGg6XnA2kbxGrwU6RvEaE3qe68R0qHmtNpMX1PdeI34fzWm0nm3t2zp2EISEiEIQCEIQOSty92h+hW9FUllKzL5+AfoVvRVIiL0qMjH8Uo/NJ5oiaphkQ/idH5mn5oiKpnFw3+V/d/tp7GXMavFOYgz1cOkUQnLzl5qAmIYzrGNMZrjFLQzTPM9sc55q/ocmy8dpnMW9sYx+e9Bk2TnPOP7Vy/GrKpVkGtWjdStGAb6eQfbNtOSHS9tPKfsEs8EuYvOdJ5tglXh1zmudS2Pf5BLNWkaKmq8dV5CVo4rSukJYeKzpHVooNGg/eCnSN4jedFKdI3yNCz6nn+Y34fzTNpMX1PP8AMb8P5pm0nl3t3Tp2EISEiEIQCEIQOSr4Q/3ep83X9DUlpKThVWzMMWOhTnUyTqXriNTUnYM50F+S8TtFVeQj+J0PmafmiJqxPB9wcFQI+Ip+aJ2rODg/O/u/2214MPERTGNEz18OlK6xiYEzl5tFa4xjTmLYxozbFXZpmmayo1sSd9b/AMfJ00rCY7hpiTh6qVQM67h2XVn06lCjTNjtDYY7rrtkc2WtW/KLNyw9r0nVHUGcQNQ17hKROEeFIuXZeZka48AIjycI8IB23Xr+DqeDVL/dw+Y5/t5fDQIdmqSEaZxeE2EH+Kfq6n8o8vCrB/HH6ur6sfcw+Yj0ZfDRKY4pmeXhZgvjj9VV9WKHC7A/HH6qr6sj7uHzEfbz+GkUxwNM2OGGA+PP1VX1YscMsB8efqq3qyLyYfMPt5/DRgxxDpG+ZocMsn/Hn6qt6siZU4dYZEPuctVqkELdGWmp7ps6xNtglLy4Sdk48renonU7/wAxvw/mGbWYPqUIxwrVDqYYamG15zU6CZ5vzMzLvUzeTz727Y7CEJAIQhAIQhAJHxmFStTalUUNTqKyOp1MrCxEkQgYZcjZSwgzMO2HxtBb9bXEsaGIUdyWClXPPxYgnK36qwx/3lP1Ju4SJJPOjywdsqfqnDeOU/UnM3Kn6owvjlP1JvoS/qowJXKn6owvjierDNyp+qML43T9Wb6EeqjA5mVP1RhPHE9Sc61lP9UYXxyn6k30JPry+Uaefth8pn/4fC+OU/Uldlbg1i8cEp18mUKSqSRUp41SUva/FzNOoaPJPUYSLnle6aeS+9CvK2Fblv1vGU/sFYjwTp6kSbMJ/wDt9rPWoSqXkPvR/Iwf08b7SHvR/wCnhPp4z2k9ehA8h96P5GD+njfaQPUj+Rg/p431569CB5D70fyMH9PG+0h70fyMH9PG+0nr0IHkQ6kfyMIP28b68kYXqRUs74RqCpouKKV2qN+1UqMFG5b889VhAh5OwFPD0loUlzKdNc1QPLvvJkIQCEIQCEIQCEIQCEIQOQhCB2EIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQP/Z" },
    { id: 4, name: "Redmi Note 9s", quantity: 1, price: 150, img: "data:image/jpeg;base64,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" }
  ]

  const data = useContext(AppContext)
  const {cart, handleCart } = data;

  return (

    <div className="container">
      <h1 className="product_heading">Products</h1>
      <div className="cart_btn">
        <Link to='/cart'>
          <button className='btn'>Cart</button>
        </Link>
        <h4>Total Item:{cart.length}</h4>
      </div>
      <div className="wrapper">
        {
          products.map((item) => (
            <ProductCard key={item.id} product={item} addToCart={handleCart} />
          ))
        }
      </div>

    </div>

  )
}

export default Product;
export { AppContext, AppProvider }

