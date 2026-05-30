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

-- 6 ques
select event_id,count(event_id) as ct
from Resources 
group by event_id;

-- 7 ques
select u.user_id,f.comments,e.title from
Users u JOIN Feedback f on f.user_id=u.user_id JOIN Events e on e.event_id=f.event_id
where f.rating< 3;

-- 8 ques
select e.title,count(e.event_id) as ct
from
Events e JOIN Sessions s on e.event_id=s.event_id
where e.status="upcoming"
group by e.event_id;

-- 9 ques
select organizer_id , count(organizer_id) as count, status
from Events
group by organizer_id,status;

-- 10 ques
