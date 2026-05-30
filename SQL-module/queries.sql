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
select event_id,count(event_id)
from Sessions
where time(start_time)>='10:00:00' and time(end_time)<='12:00:00'
group by event_id;

-- 5ques
select u.city, count(distinct(u.user_id)) as ct
from
Users u JOIN Registrations r
on u.user_id=r.user_id
group by u.city
order by ct desc
limit 5;
