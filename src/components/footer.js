import React from "react";
import "./styles/footer.css";
import SubscriptionForm from "./subscription"

export default function Footer(){
    return(
        <div className="emerald_footer">
            <div class="footer_section">
      <p>
         <span>About Us</span>
          {/* <ul className="footer_listing">
              <li class="list"><a href="/">Contact Us</a></li>
              <li class="list"><a href="/">Careers</a></li>
              <li class="list"><a href="/">Privacy &amp; Security</a></li>
              <li class="list"><a href="/">About BEAT Inc.</a></li>
              <li class="list"><a href="/">Feedback</a></li>
          </ul> */}

      </p>
  </div>

  {/* second */}
  <div class="footer_section">
      <p>
         <span>Contact Us</span>
          {/* <ul className="footer_listing">
              <li class="list"><a href="/">Contact Us</a></li>
              <li class="list"><a href="/">Careers</a></li>
              <li class="list"><a href="/">Privacy &amp; Security</a></li>
              <li class="list"><a href="/">About BEAT Inc.</a></li>
              <li class="list"><a href="/">Feedback</a></li>
          </ul> */}

      </p>
  </div>

  {/* third */}
  <div class="footer_section">
      <p>
         <span>Quick Navigation</span>
          <ul className="footer_listing">
              <li class="list"><a href="/">Login</a></li>
              <li class="list"><a href="/">Register</a></li>
              <li class="list"><a href="/">Farms Projects</a></li>
              <li class="list"><a href="/">How it works</a></li>
              <li class="list"><a href="/">FAQ</a></li>
          </ul>

      </p>
  </div>
  
  {/* fourth */}
  <div class="footer_section">
      <p>
         <span style={{textTransform:"uppercase"}}>Subscribe</span>
          <ul className="footer_listing">
              <li class="list"><a href="/">Subscribe to our newsletter here</a></li>
              <li class="list"><a href="/"><SubscriptionForm /></a></li>
          </ul>

      </p>
  </div>
{/* fifth */}
  <div class="footer_section">
      <p>
         <span>Recent Post</span>
          <ul className="footer_listing">
              <li class="list"><a href="/">Details of recent post</a></li>
              
          </ul>

      </p>
  </div>
        </div>
    )
}