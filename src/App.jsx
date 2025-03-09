import './App.css'

function App() {


  return (
    <>
     <div class="container">
        <header>
            <h1>Email Template Manager</h1>
            <p class="subtitle">Select a template to start crafting your email campaign</p>
        </header>
        
        <div class="template-grid">
            {/* <!-- New Year Template Card --> */}
            <div class="template-card new-year">
                <div class="card-header">
                    New Year Greetings
                </div>
                <div class="template-preview">
                    <div class="email-template new-year-template">
                        <div class="header">
                            <div class="logo">COMPANY LOGO</div>
                            <h2>Happy New Year 2025!</h2>
                        </div>
                        <div class="content">
                            <p>Dear [Customer Name],</p>
                            <p>As we welcome the new year, we'd like to express our sincere gratitude for your continued support throughout 2024. It's been an incredible journey, and we're excited about what lies ahead.</p>
                            <p>To celebrate the new year, we're offering you a special 25% discount on all our products until January 15th.</p>
                            <div style="text-align: center;">
                                <a href="#" class="cta-button">CLAIM YOUR DISCOUNT</a>
                            </div>
                            <p>Wishing you and your loved ones a prosperous and joyful 2025!</p>
                            <p>Warm regards,<br>The [Company Name] Team</p>
                        </div>
                        <div class="footer">
                            <p>© 2025 [Company Name]. All rights reserved.</p>
                            <p>123 Business Street, City, Country</p>
                            <p><a href="#">Unsubscribe</a> | <a href="#">View in browser</a></p>
                        </div>
                    </div>
                </div>
                <div class="template-actions">
                    <button class="btn btn-outline">Preview</button>
                    <button class="btn btn-primary">Use Template</button>
                </div>
            </div>
            
            {/* <!-- Discount Offer Template Card --> */}
            <div class="template-card discount">
                <div class="card-header">
                    Special Discount Offer
                </div>
                <div class="template-preview">
                    <div class="email-template discount-template">
                        <div class="header">
                            <div class="logo">COMPANY LOGO</div>
                            <h2>Exclusive Offer Just For You!</h2>
                        </div>
                        <div class="content">
                            <p>Hello [Customer Name],</p>
                            <p>We're excited to offer you an exclusive discount as one of our valued customers!</p>
                            <p>For a limited time, enjoy <strong>40% OFF</strong> on our entire collection. Whether you're looking to upgrade or try something new, now is the perfect time.</p>
                            <div style="text-align: center;">
                                <a href="#" class="cta-button">SHOP NOW</a>
                            </div>
                            <p>This offer expires in 48 hours, so don't miss out!</p>
                            <p>Use code: <strong>SPECIAL40</strong> at checkout.</p>
                            <p>Thank you for being a loyal customer.</p>
                            <p>Best regards,<br/>[Company Name] Team</p>
                        </div>
                        <div class="footer">
                            <p>© 2025 [Company Name]. All rights reserved.</p>
                            <p>123 Business Street, City, Country</p>
                            <p><a href="#">Unsubscribe</a> | <a href="#">View in browser</a></p>
                        </div>
                    </div>
                </div>
                <div class="template-actions">
                    <button class="btn btn-outline">Preview</button>
                    <button class="btn btn-primary">Use Template</button>
                </div>
            </div>
            
            {/* <!-- Birthday Wishes Template Card --> */}
            <div class="template-card birthday">
                <div class="card-header">
                    Birthday Wishes
                </div>
                <div class="template-preview">
                    <div class="email-template birthday-template">
                        <div class="header">
                            <div class="logo">COMPANY LOGO</div>
                            <h2>Happy Birthday, [Customer Name]! 🎂</h2>
                        </div>
                        <div class="content">
                            <p>Dear [Customer Name],</p>
                            <p>All of us at [Company Name] would like to wish you a very happy birthday! We hope your day is filled with joy, laughter, and wonderful memories.</p>
                            <p>As a birthday gift from us, we're giving you a special <strong>30% discount</strong> on your next purchase. Consider it our small way of celebrating you!</p>
                            <div style="text-align: center;">
                                <a href="#" class="cta-button">REDEEM BIRTHDAY GIFT</a>
                            </div>
                            <p>Your birthday coupon code: <strong>BDAYJOY30</strong></p>
                            <p>Valid for 7 days from today.</p>
                            <p>Have a fantastic birthday!</p>
                            <p>Cheers,<br>The [Company Name] Family</p>
                        </div>
                        <div class="footer">
                            <p>© 2025 [Company Name]. All rights reserved.</p>
                            <p>123 Business Street, City, Country</p>
                            <p><a href="#">Unsubscribe</a> | <a href="#">View in browser</a></p>
                        </div>
                    </div>
                </div>
                <div class="template-actions">
                    <button class="btn btn-outline">Preview</button>
                    <button class="btn btn-primary">Use Template</button>
                </div>
            </div>
            
            {/* <!-- Product Launch Template Card --> */}
            <div class="template-card">
                <div class="card-header">
                    Product Launch Announcement
                </div>
                <div class="template-preview">
                    <div class="email-template">
                        <div class="header">
                            <div class="logo">COMPANY LOGO</div>
                            <h2>Introducing Our Newest Product!</h2>
                        </div>
                        <div class="content">
                            <p>Dear [Customer Name],</p>
                            <p>We're thrilled to announce the launch of our newest product, [Product Name]!</p>
                            <p>After months of development and testing, we're proud to bring you a solution that [brief description of product benefits].</p>
                            <p>As one of our valued customers, you get early access and a special 20% launch discount!</p>
                            <div style="text-align: center;">
                                <a href="#" class="cta-button">EXPLORE NOW</a>
                            </div>
                            <p>Use code: <strong>NEWLAUNCH20</strong> at checkout.</p>
                            <p>We can't wait to hear what you think about our newest addition.</p>
                            <p>Sincerely,<br/>[Company Name] Team</p>
                        </div>
                        <div class="footer">
                            <p>© 2025 [Company Name]. All rights reserved.</p>
                            <p>123 Business Street, City, Country</p>
                            <p><a href="#">Unsubscribe</a> | <a href="#">View in browser</a></p>
                        </div>
                    </div>
                </div>
                <div class="template-actions">
                    <button class="btn btn-outline">Preview</button>
                    <button class="btn btn-primary">Use Template</button>
                </div>
            </div>
            
            {/* <!-- Thank You Template Card --> */}
            <div class="template-card">
                <div class="card-header">
                    Thank You For Your Purchase
                </div>
                <div class="template-preview">
                    <div class="email-template">
                        <div class="header">
                            <div class="logo">COMPANY LOGO</div>
                            <h2>Thank You For Your Purchase!</h2>
                        </div>
                        <div class="content">
                            <p>Dear [Customer Name],</p>
                            <p>Thank you for your recent purchase with [Company Name]! We're grateful for your support and trust in our products.</p>
                            <p>Your order #[Order Number] has been confirmed and is being processed. You'll receive a shipping notification once it's on its way.</p>
                            <p>As a token of our appreciation, here's a 15% discount on your next purchase:</p>
                            <p style="text-align: center; font-weight: bold; font-size: 18px; margin: 15px 0;">THANKYOU15</p>
                            <div style="text-align: center;">
                                <a href="#" class="cta-button">SHOP AGAIN</a>
                            </div>
                            <p>If you have any questions about your order, please don't hesitate to contact our customer service team.</p>
                            <p>Best regards,<br/>[Company Name] Team</p>
                        </div>
                        <div class="footer">
                            <p>© 2025 [Company Name]. All rights reserved.</p>
                            <p>123 Business Street, City, Country</p>
                            <p><a href="#">Unsubscribe</a> | <a href="#">View in browser</a></p>
                        </div>
                    </div>
                </div>
                <div class="template-actions">
                    <button class="btn btn-outline">Preview</button>
                    <button class="btn btn-primary">Use Template</button>
                </div>
            </div>
            
            {/* <!-- Newsletter Template Card --> */}
            <div class="template-card">
                <div class="card-header">
                    Monthly Newsletter
                </div>
                <div class="template-preview">
                    <div class="email-template">
                        <div class="header">
                            <div class="logo">COMPANY LOGO</div>
                            <h2>[Company Name] Newsletter - March 2025</h2>
                        </div>
                        <div class="content">
                            <p>Hello [Customer Name],</p>
                            <p>Welcome to our March newsletter! Here's what's new this month:</p>
                            <ul style="margin-left: 20px; margin-bottom: 15px;">
                                <li><strong>New Product Releases:</strong> Check out our latest additions</li>
                                <li><strong>Customer Spotlight:</strong> See how [Customer Example] achieved success</li>
                                <li><strong>Upcoming Events:</strong> Join us at [Event Name] on March 15th</li>
                                <li><strong>Tips & Tricks:</strong> Maximize your experience with our products</li>
                            </ul>
                            <p>This month's special offer: Get 25% off when you refer a friend!</p>
                            <div style="text-align: center;">
                                <a href="#" class="cta-button">READ FULL NEWSLETTER</a>
                            </div>
                            <p>We hope you enjoy this month's updates!</p>
                            <p>Warm regards,<br/>The [Company Name] Team</p>
                        </div>
                        <div class="footer">
                            <p>© 2025 [Company Name]. All rights reserved.</p>
                            <p>123 Business Street, City, Country</p>
                            <p><a href="#">Unsubscribe</a> | <a href="#">View in browser</a></p>
                        </div>
                    </div>
                </div>
                <div class="template-actions">
                    <button class="btn btn-outline">Preview</button>
                    <button class="btn btn-primary">Use Template</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default App
