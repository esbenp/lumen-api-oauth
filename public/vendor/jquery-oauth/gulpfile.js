var gulp = require("gulp");
var umd = require("gulp-umd");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var del = require("del");

gulp.task("umd", ["clean"], function() {
    return gulp.src("src/*")
        .pipe(umd({
            dependencies: function(file) {
                return [
                    {
                        name: "jquery",
                        amd: "jquery",
                        cjs: "jquery",
                        global: "jQuery",
                        param: "$"
                    },
                    {
                        name: "store",
                        amd: "store",
                        cjs: "store",
                        global: "store",
                        param: "storage"
                    }
                ];
            },
            exports: function(file) {
                return 'jqOAuth';
            },
            namespace: function(file) {
                return 'jqOAuth';
            }
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task("clean", function(callback){
    del(["dist"], callback);
});

gulp.task("production", ["umd"], function(){
    return gulp.src("dist/*.js")
        .pipe(rename({suffix: ".min"}))
        .pipe(uglify())
        .pipe(gulp.dest("dist"))
});

gulp.task("dev", function(){
    return gulp.watch("src/**/*.js", ["umd"]);
});