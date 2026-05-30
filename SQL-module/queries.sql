-- use usercollection;
-- select * from Users;
-- 1ques
select * from Events 
where status ="upcoming" order by start_date;

-- 2ques
select event_id,avg(rating) as average
from Feedback
group by event_id
having count(feedback_id)>=10
order by average;

-- 3ques
SELECT u.*
FROM Users u
WHERE NOT EXISTS (
    SELECT u.user_id
    FROM Registrations r
    WHERE r.user_id = u.user_id
      AND curdate()-r.registration_date<90
);
-- 4ques
