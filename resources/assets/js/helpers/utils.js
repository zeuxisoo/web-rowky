module.exports = {
    make_query_strings: function (obj, num_prefix, temp_key) {
        var output_string = []

        Object.keys(obj).forEach(function (value) {
            var key = value;

            if (num_prefix && !isNaN(key)) {
                key = num_prefix + key;
            }

            key = encodeURIComponent(key.replace(/[!'()*]/g, escape));

            if (temp_key) {
                key = temp_key + '[' + key + ']';
            }

            if (typeof obj[value] === 'object') {
                output_string.push(build_query(obj[value], null, key));
            }else{
                output_string.push(
                    key +
                    '=' +
                    encodeURIComponent(obj[value].toString().replace(/[!'()*]/g, escape))
                );
            }
        });

        return output_string.join('&');
    }
}
