import { useCountUp } from 'react-countup';
import { useEffect, useState } from 'react';
import CounterItem from './CounterItem';
const API_URL = process.env.REACT_APP_API_URL;

const fetchLeetCodeProblemCount = async () => {
  const query = `
    query getUserProfile($username: String!) {
      matchedUser(username: $username) {
        submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(`${API_URL}/leetcode-proxy`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { username: 'user8756nf' },
      }),
    });

    const data = await response.json();
    console.log('API Response:', data);

    if (data.errors) {
      throw new Error(data.errors[0].message || 'Error fetching LeetCode data');
    }

    if (!data.data || !data.data.matchedUser) {
      throw new Error('User not found or has no submissions');
    }

    const problemCounts = data.data.matchedUser.submitStatsGlobal.acSubmissionNum.reduce(
      (acc, curr) => {
        acc[curr.difficulty] = curr.count;
        return acc;
      },
      {}
    );

    return problemCounts;
  } catch (error) {
    console.error('Error fetching LeetCode problem count:', error);
    throw error;
  }
};

const AboutCounter = () => {
  const [leetCodeCounts, setLeetCodeCounts] = useState({
    All: 0,
    Easy: 0,
    Medium: 0,
    Hard: 0
  });
  const [error, setError] = useState(null);

  useCountUp({ ref: 'experienceCounter', end: 2, duration: 2 });

  useEffect(() => {
    const updateLeetCodeCounter = async () => {
      try {
        const problemCounts = await fetchLeetCodeProblemCount();
        setLeetCodeCounts(problemCounts);
      } catch (err) {
        console.error('Error updating LeetCode counter:', err);
        setError(err.message);
      }
    };

    updateLeetCodeCounter();
  }, []);

  return (
    <div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
      <div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
        {/* Experience Counter */}
        <CounterItem
          title="Years of experience"
          counter={<span id="experienceCounter" />}
          measurement=""
        />

        {/* LeetCode Problems Counter */}
        <div className="flex flex-col items-center">
          <CounterItem
            title="LeetCode problems completed"
            counter={leetCodeCounts.All}
            measurement=""
          />
          <div className="flex justify-between w-full mt-4">
            <CounterItem
              title="Easy"
              counter={leetCodeCounts.Easy}
              measurement=""
              className="text-green-500"
            />
            <CounterItem
              title="Medium"
              counter={leetCodeCounts.Medium}
              measurement=""
              className="text-yellow-500"
            />
            <CounterItem
              title="Hard"
              counter={leetCodeCounts.Hard}
              measurement=""
              className="text-red-500"
            />
          </div>
        </div>
      </div>
      {error && <p className="text-red-500 text-center">{error}</p>}
    </div>
  );
};

export default AboutCounter;