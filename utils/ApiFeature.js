// /**
//  * @Responsibilty - Utility function for pagination
//  * @param query
//  * @param queryStr
//  * @returns {Object}
//  */

// class APIFeature {
//   constructor(query, queryStr) {
//     this.query = query;
//     this.queryStr = queryStr;
//   }

//   pagination(resPerPage) {
//     const currentPage = Number(this.queryStr.page) || 1;
//     //skip the products on the current page
//     const skip = resPerPage * (currentPage - 1);

//     // limit() takes one parameter - a number defining how many documents to return.
//     this.query = this.query({ limit: resPerPage, offset: skip });
//     console.log(this.query);
//     return this;
//   }
// }

// export default APIFeature;
