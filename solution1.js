// const result1 = data.groupPermissions.map(
//   ({ permissions, groupPermissionCode, groupPermissionName }) =>
//     permissions.map((i) => ({
//       ...i,
//       groupPermissionCode,
//       groupPermissionName,
//     }))
// );

// const result = result1.reduce((previousValue, currentValue) => {
//   return previousValue.concat(currentValue);
// }, []);

// const newData = _.chain(result)
//   .map((x) => ({
//     ...x,
//     activeChannelCode: x.activeChannelCode || "OTHER",
//     activeChannelName: x.activeChannelName || "Khác",
//   }))
//   .groupBy("activeChannelCode", "groupPermissionCode")
//   .value();

// const transformData = (data) => {
//   const transformedData = _.mapValues(data, (dataArray) => {
//     const groupedData = _.groupBy(
//       _.concat(...dataArray),
//       "groupPermissionCode"
//     );
//     return _.mapValues(groupedData, (group) => group);
//   });
//   return transformedData;
// };

// const transformedData = transformData(newData);

// {
//   Object.keys(transformedData).map((channelCode) => (
//     <div key={channelCode}>
//       <h2>{channelCode}</h2>
//       {Object.keys(transformedData[channelCode]).map((permissionType) => (
//         <div key={permissionType}>
//           <h3>{permissionType}</h3>
//           <ul>
//             {transformedData[channelCode][permissionType].map((item, index) => (
//               <li key={index}>
//                 <strong>Group Permission Name:</strong>{" "}
//                 {item.groupPermissionName}
//                 <br />
//                 <strong>Permission Name:</strong> {item.permissionName}
//                 <br />
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   ));
// }

// best solution:

{
  Object.keys(transformedData).map((channelCode) => (
    <div key={channelCode}>
      <h2>{channelCode}</h2>
      {Object.keys(transformedData[channelCode]).map((permissionType) => (
        <div key={permissionType}>
          <h3>
            {
              transformedData[channelCode][permissionType][0]
                .groupPermissionName
            }
          </h3>
          <ul>
            {transformedData[channelCode][permissionType].map((item, index) => (
              <li key={index}>
                <strong>Permission Name:</strong> {item.permissionName}
                <br />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  ));
}
