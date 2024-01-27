import React from "react";
import CharityDetails from "../CharityDetails/CharityDetails";
import icon5 from "./epicarts.svg"
import icon4 from "./artforcharity.jpg"
import icon3 from "./annosafrica-lanczos3.png"
import icon2 from "./aaf.png"
import icon1 from "./artfund.svg"
import Loading from "../Loading/Loading";

const Charity = () => {

  return (
    <div>
      <div className="card mt-1">
        <div className="card-body align-items-center d-flex justify-content-center">
          <h4>
            Charities
          </h4>
        </div>
      </div>
      <div className="d-flex flex-wrap mb-4">
            <div
            
              className="w-100 p-4 mt-1 border"
            >
            <div className="row">
              <div className="col-md-3">              
                  {true ? (
                    <img src={icon1} class="rounded mx-auto d-block mt-4" alt="icon" width="330" height="120"/>
                  ) : (
                    <Loading />
                  )}
                </div>
                    <CharityDetails
                    name="Artfund"
                    description="Artfund is a registered charity that provides funds that enable museums and galleries to purchase works of art and fund events and exhibitions.

                    This art charity provides around £9m a year from their 110,000 members and their very committed network of volunteer fundraisers.
                    
                    This money is used to provide cash for museums and galleries to buy valuable and important works of art.
                    
                    Money is also given to display works of art to a wider public by organising tours and exhibitions.
                    
                    Artfund receives no public funding; however, they often work in partnerships with other organisations to raise money for important art purchases." 
                    link = "https://www.artfund.org/"
                    />
              </div>
            </div>
            <div
            
            className="w-100 p-4 mt-1 border"
          >
          <div className="row">
            <div className="col-md-3">              
                {true ? (
                  <img src={icon4} class="rounded mx-auto d-block mt-3" alt="icon" width="270" height="120"/>
                ) : (
                  <Loading />
                )}
              </div>
                  <CharityDetails
                  name="Art for Charity"
                  description="Art for Charity raises large sums of money for charity through sales of artwork through various selling methods.

                  They arrange to sell high profile works of art by way of charity events, corporate events and online sales.
                  
                  Art for Charity collaborate with the artists and arrange for an agreed percentage of the sale to be donated to various charities.
                  
                  These donations are made up from 20% on original artwork, while limited editions raise a minimum of 30% on each sale." 
                  link = "https://www.artforcharityuk.com/"
                  />
            </div>
          </div>
          <div
            
            className="w-100 p-4 mt-1 border"
          >
          <div className="row">
            <div className="col-md-3">              
                {true ? (
                  <img src={icon3} class="rounded mx-auto d-block mt-5" alt="icon"/>
                ) : (
                  <Loading />
                )}
              </div>
                  <CharityDetails
                  name="Anno's Africa"
                  description="Anno's Africa is a UK based children's arts charity running educational arts projects for children living in slum conditions in Kenya and in cities and towns in Northern Malawi.
                  The charity was set up in memory of Anno Birkin (www.anno.co.uk) a young, gifted writer and musician who died in a car crash in 2001, just one month short of his 21st birthday.  
                  Anno's Africa has been operating in Kenya since 2006 and there are currently around 3,000 children participating  in our workshops in Nairobi and Nakuru and in the weekly clubs run by our sister organization One Fine Day in the Nairobi slums.   We are now also working in Northern Malawi with 700 children in Mzuzu and Nkhata Bay." 
                  link = "http://www.annosafrica.org.uk/"
                  />
            </div>
          </div>
          <div
            
            className="w-100 p-4 mt-1 border"
          >
          <div className="row">
            <div className="col-md-3">              
                {true ? (
                  <img src={icon2} class="rounded mx-auto d-block mt-2" alt="icon2"/>
                ) : (
                  <Loading />
                )}
              </div>
                  <CharityDetails
                  name="African Artists' Foundation"
                  description="African Artists’ Foundation (AAF) is a non-profit organisation dedicated to the promotion and development of contemporary African art.
                  It encourages local artists to showcase and embrace their local heritage and culture by creating intricate pieces of artwork in the form of jewelery, ornaments, tapestries and more." 
                  link = "https://www.africanartists.org/"
                  />
            </div>
          </div>
          <div
            
            className="w-100 p-4 mt-1 border"
          >
          <div className="row">
            <div className="col-md-3">              
                {true ? (
                  <img src={icon5} class="rounded mx-auto d-block mt-2" alt="icon2" width="380" height="150"/>
                ) : (
                  <Loading />
                )}
              </div>
                  <CharityDetails
                  name="Epic Arts"
                  description="Epic Arts is a charity that believes in promoting inclusion and acceptance of people of all abilities through training programmes and workshops across the world.

                  The charity was formed in 2001 as an arts organisation that aims to bring both able and disabled people together through drama, theatre and creative projects.
                  
                  Their first project in 2001 was choreographing an integral dance performance with children in an orphanage in China. Since then they have expanded their range of creative projects to cover all aspects of the creative arts." 
                  link = "https://epicarts.org.uk/"
                  />
            </div>
          </div>
      </div>
    </div>
  );
};

export default Charity;
