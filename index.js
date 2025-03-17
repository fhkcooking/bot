export default {
  async fetch(request) {
    // Function to generate random numbers within a range
    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Function to generate the HTML content
    function generateHTML() {
      return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🚀 Trade Beast Documentation ✅</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #ffffff;
            color: #333;
            margin: 0;
            padding: 40px;
            line-height: 1.6;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
        }
        h1, h2 {
            color: #222;
        }
        .section {
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #eee;
        }
        .highlight {
            color: #28a745;
            font-weight: bold;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
        }
        table, th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f4f4f4;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 Trade Beast Documentation ✅</h1>
        <p><strong>Bot Username:</strong> <span class="highlight">@trade_with_me_bot ✅ (Running & Active)</span><br>Please save this link for your records. If we ever need to update or transition to a new bot, your account statistics and progress will be preserved and carried over seamlessly and this is where new bot username will be provided</p>

        <div class="section">
            <h2>📌 Overview</h2>
            <p>Welcome to <strong>Trade Beast</strong>, a fully automated trading bot designed to maximize profits using community funds and high-leverage strategies. Our system ensures sustainable and consistent earnings through strategic trading.</p>
            <p>Currently, we trade <strong>Bitcoin (BTC)</strong> as our primary asset, but we plan to expand to altcoins in the future to further increase profitability.</p>
        </div>

        <div class="section">
            <h2>🔓 Team Profit Unlocking System</h2>
            <p>Team profits are unlocked at <strong>Level 2</strong> and provide passive earnings from your referral network:</p>
            <ul>
                <li><strong>Level A (Direct Referrals)</strong> – Earn <span class="highlight">2%</span> of their daily earnings.</li>
                <li><strong>Level B (Indirect Referrals)</strong> – Earn <span class="highlight">1%</span> of their daily earnings.</li>
                <li><strong>Level C (Extended Network)</strong> – Earn <span class="highlight">0.5%</span> of their daily earnings.</li>
                <li>❌ <strong>Referee's Balance</strong> – If your referee's account balance decreases from $50 they will be removed from your list until they deposit again.</li>
            </ul>
            <p>Your referral network generates passive income while they trade!</p>
        </div>

        <div class="section">
            <h2>🎯 Trading Limits Per Level</h2>
            <p>Each level unlocks a higher number of active trades:</p>
            <ul>
                <li><strong>Level 0</strong> – 1 trade per day</li>
                <li><strong>Level 1</strong> – 1 trade per day</li>
                <li><strong>Level 2</strong> – 2 trades per day</li>
                <li><strong>Level 3</strong> – 4 trades per day</li>
                <li><strong>Level 4</strong> – 6 trades per day</li>
                <li><strong>Level 5</strong> – 8 trades per day</li>
            </ul>
            <p>The more you progress, the more trades and profit potential you unlock!</p>
        </div>

        <div class="section">
            <h2>🎁 Referral Bonus System</h2>
            <p>Earn rewards when your referrals make their first deposit:</p>
            <ul>
                <li><strong>Referrer (You)</strong> gets <span class="highlight">10%</span> of their first deposit.</li>
                <li><strong>Depositor</strong> gets <span class="highlight">5%</span> as a welcome bonus.</li>
            </ul>
            <p><em>Example:</em> If your referral deposits more than <strong>$50</strong>, you receive <strong>10%</strong>, and they receive <strong>5%</strong> in bonuses!. <br><strong>NOTE</strong> This is one time only.</p>
        </div>

        <div class="section">
            <h2>🔥 How We Trade</h2>
            <p>Our trading strategy is designed for maximum profitability with minimal risk:</p>
            <ul>
                <li>✅ <strong>Community Fund Utilization</strong> – We pool funds from all users to execute high-leverage trades.</li>
                <li>✅ <strong>Maximum Leverage</strong> – Our expert system applies leverage to hit targets faster.</li>
                <li>✅ <strong>Profitable Strategy</strong> – We execute only the best trade setups with strict risk management.</li>
                <li>✅ <strong>Expanding Asset Selection</strong> – Currently, we trade Bitcoin (BTC), but we will soon add altcoins to further increase profits.</li>
            </ul>
        </div>

        <div class="section">
            <h2>💰 Community Funds & Growth</h2>
            <p>📈 <strong>Current Community Fund:</strong> $ <span id="communityFund">50,000,000</span> (Updates in real-time)</p>
            <p>📈 <strong>Community Fund Growth:</strong> + <span class="highlight">$5,000,000</span> every month</p>
            <p>📈 <strong>Active Traders:</strong> <span id="activeUsers">278,646</span> users 🚀</p>
            <p>With a growing community and ever-increasing funds, our trading power keeps getting stronger!</p>
        </div>

        <div class="section">
            <h2>🏆 Leveling Up – Account Requirements</h2>
            <table>
                <tr>
                    <th>Level</th>
                    <th>Min. Balance (USDT)</th>
                    <th>Referrals A</th>
                    <th>Referrals B/C</th>
                    <th>Team Members</th>
                    <th>Min. Deposit (USDT)</th>
                </tr>
                <tr>
                    <td>0</td>
                    <td>No Requirement</td>
                    <td>No Requirement</td>
                    <td>No Requirement</td>
                    <td>No Requirement</td>
                    <td>No Requirement</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>$50.00</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>$0.00</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>$100.00</td>
                    <td>3</td>
                    <td>5</td>
                    <td>8</td>
                    <td>$100.00</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>$600.00</td>
                    <td>6</td>
                    <td>10</td>
                    <td>26</td>
                    <td>$600.00</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>$1,500.00</td>
                    <td>20</td>
                    <td>30</td>
                    <td>50</td>
                    <td>$1,500.00</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>$5,000.00</td>
                    <td>50</td>
                    <td>100</td>
                    <td>300</td>
                    <td>$5,000.00</td>
                </tr>
            </table>
        </div>

        <div class="section">
            <h2>🚀 Why Choose Us?</h2>
            <ul>
                <li>✔️ <strong>High-Leverage Trading</strong> – Maximize profits efficiently.</li>
                <li>✔️ <strong>Passive Income System</strong> – Earn from your referral network.</li>
                <li>✔️ <strong>Low Risk, High Reward</strong> – Managed with precision.</li>
                <li>✔️ <strong>Continuous Expansion</strong> – More assets & features coming soon.</li>
            </ul>
            <p><strong>Join now and start growing your earnings today! 🚀</strong></p>
        </div>
    </div>

    <script>
        let communityFund = 50000000; // Starting fund amount
        let activeUsers = 278646; // Starting active users

        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function updateNumbers() {
            // Generate random changes for community fund and users
            let fundChange, userChange;

            if (Math.random() < 0.85) {
                // Normal small changes (85% chance)
                fundChange = getRandomNumber(-50000, 50000); // Between -50k and +50k
                userChange = getRandomNumber(-10, 10); // Between -10 and +10 users
            } else {
                // Rare large spikes (15% chance)
                fundChange = getRandomNumber(-200000, 200000); // Between -200k and +200k
                userChange = getRandomNumber(-50, 50); // Between -50 and +50 users
            }

            // Ensure values don’t drop below realistic limits
            communityFund = Math.max(communityFund + fundChange, 49000000); // Prevents going below 49M
            activeUsers = Math.max(activeUsers + userChange, 278000); // Prevents going below 278k

            // Update values on the page
            document.getElementById("communityFund").innerText = communityFund.toLocaleString();
            document.getElementById("activeUsers").innerText = activeUsers.toLocaleString();

            // Schedule the next update at a random interval (between 500ms to 3000ms)
            setTimeout(updateNumbers, getRandomNumber(500, 3000));
        }

        // Function to add $5 million after 1 month
        function addMonthlyFunds() {
            communityFund += 5000000; // Add $5 million
            document.getElementById("communityFund").innerText = communityFund.toLocaleString();
        }

        // Start the updates
        updateNumbers();

        // Schedule the $5 million addition after 1 month (simulated as 30 seconds for testing)
        setTimeout(addMonthlyFunds, 30000); // Change to 2592000000 for 30 days
    </script>
</body>
</html>`;
    }

    // Serve the generated HTML as a response
    return new Response(generateHTML(), {
      headers: { "Content-Type": "text/html" },
    });
  },
};
