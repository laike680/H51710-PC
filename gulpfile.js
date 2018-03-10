// 引入模块
let gulp=require("gulp"),
	js=require("gulp-uglify"),
	htmlmin=require("gulp-htmlmin"),
	sass=require("gulp-sass"),
	connect=require("gulp-connect");

// 启动服务器
gulp.task("server",function(){
	connect.server({
		root:"dest",
		livereload:true
	})
});

// 定义gulp任务，压缩html
gulp.task("html",function(){
	gulp.src("html/**/*.html")
	.pipe(htmlmin({collapseWhitespace: true, minifyCSS:true, minifyJS:true}))
	.pipe(gulp.dest("dest/html"))
	.pipe(connect.reload());
});

gulp.task("indexhtml",function(){
	gulp.src("index.html")
	.pipe(htmlmin({collapseWhitespace: true, minifyCSS:true, minifyJS:true}))
	.pipe(gulp.dest("dest"))
	.pipe(connect.reload());
});

// 定义gulp任务，压缩sass
gulp.task("sass",function(){
	gulp.src("sass/**/*.scss")
	.pipe(sass({outputStyle:"compressed"}))
	.pipe(gulp.dest("dest/css"))
	.pipe(connect.reload());
});

// 定义gulp任务，压缩js
gulp.task("js",function(){
	gulp.src("js/**/*.js")
	.pipe(js())
	.pipe(gulp.dest("dest/js"))
	.pipe(connect.reload());
});

// 定义gulp任务，复制images
gulp.task("image",function(){
	gulp.src("images/**/*.*")
	.pipe(gulp.dest("dest/images"));
});

// 定义gulp任务，复制lib库
gulp.task("lib",function(){
	gulp.src("lib/**/*.*")
	.pipe(gulp.dest("dest/lib"));
});

// 定义gulp任务，复制模拟数据
gulp.task("mock",function(){
	gulp.src("mock/**/*.*")
	.pipe(gulp.dest("dest/mock"));
});

// 定义gulp任务，复制任务集成
gulp.task("copyfile",["image","lib","mock"]);

// 定义gulp任务，添加监视（自动刷新）
gulp.task("watch",function(){
	gulp.watch("sass/**/*.scss", ["sass"]);
	gulp.watch("js/**/*.js",["js"]);
	gulp.watch("index.html",["indexhtml"]);
	gulp.watch("html/**/*.html",["html"]);
});

gulp.task("default", ["indexhtml","html", "js", "sass", "copyfile", "server", "watch"]);