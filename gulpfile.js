const gulp = require('gulp');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const merge = require('merge-stream');
const tsProject = ts.createProject('./tsconfig.json');
const tsProjectModule = ts.createProject('./moduleTsconfig.json');
const cleanDist = require('gulp-clean');

const requiredDevDistFiles = ['package.json'];
const devDist = 'dist';
const moduleDist = 'module';

function clean() {
	return gulp.src([devDist], {
		read: false,
		allowEmpty: true
	})
		.pipe(cleanDist());
}

function buildTs() {
	return tsProject.src()
		.pipe(sourcemaps.init())
		.pipe(tsProject())
		.js
		.pipe(sourcemaps.write('./', {
			includeContent: false,
			sourceRoot: () => ""
		}))
		.pipe(gulp.dest(devDist));
}

function buildModule() {
	const tsResult = tsProjectModule.src()
		.pipe(gulp.src('./src/index.ts'))
		.pipe(sourcemaps.init())
		.pipe(tsProjectModule());

	return merge([
		tsResult
			.dts
			.pipe(gulp.dest(moduleDist)),
		tsResult
			.js
			.pipe(sourcemaps.write('./', {
				// includeContent: false,
				sourceRoot: () => ""
			}))
			.pipe(gulp.dest(moduleDist))
	]);
}

function copyDevDistRequiredFiles(cb) {
	gulp.src(requiredDevDistFiles)
		.pipe(gulp.dest(devDist));
	cb();
}


exports.clean = clean;
exports.buildTs = gulp.parallel(buildTs, copyDevDistRequiredFiles);
exports.buildModule = buildModule;
