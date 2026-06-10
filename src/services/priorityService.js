const priorityMap = {
    Placement: 3,
    Result: 2,
    Event: 1,
};
export const getTopNotifications = (notifications)=>{
    return notifications
    .sort((a,b) => {
        const priorityDiff = 
        priorityMap[b.type] - priorityMap[a.type];
    if(priorityDiff !== 0) return priorityDiff;
    return (new Date(b.Timestamp) - new Date(a.Timestamp)
    );
    })
    .slice(0,10);
};