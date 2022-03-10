class ApiFeature {
    constructor(query,queryStr){
        this.query = query;
        this.queryStr = queryStr
    }

    search(){
        const keyword = this.queryStr.keyword ?
        {name:{ $regex: this.queryStr.keyword,$options:"i"}} : {}

        this.query = this.query.find({...keyword});
        return this;
    }

    filter(){
        const queryCopy = {...this.queryStr};
        // removing fields from queryCopy
        const removeFields = ["keyword","page","limit"];

        removeFields.forEach(key => delete queryCopy[key]);


        // filter for the price and rating
        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, key => `$${key}`);


        this.query = this.query.find(JSON.parse(queryStr));

        return this;
    }
    pagination(resultPerPage){
        const curentPage = Number(this.queryStr.page) || 1;
        const Skip = resultPerPage * (curentPage - 1);
        this.query = this.query.limit(resultPerPage).skip(Skip);
        return this;
    }
}


module.exports = ApiFeature;