/*
 * html2js
 * https://github.com/geng.cheng/fdm-html2js
 *
 * Copyright (c) 2013 yangfan.yuyf
 * Licensed under the MIT license.
 */

'use strict';
var HtmlCompress = require("html-compress");

module.exports = function(grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('html2js', 'Convert html to js string', function() {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            encoding: 'gbk',
            compress:true
        });
        this.files.forEach(function(f) {

            f.src.forEach(function(filepath) {
                if (!grunt.file.exists(filepath)) {
                    return;
                }
                var output=[];
                var filecontentTemp = grunt.file.read(filepath, {
                    encoding: options.encoding
                });
                var varnameTemp = '';
                var filenameTemp = '';
               
                // 文件名
                filenameTemp = filecontentTemp.match(/<!--filename:(\w+)-->/);
                try{
                    output.fileName = filenameTemp[1];
                }catch(e){
                    output.fileName =filepath.replace(/[^\/]*[\/]+/g, '').replace(/(.*\/){0,}([^.]+).*/ig, '$2');
                }
                 
                //变量名
                varnameTemp = filecontentTemp.match(/<!--varname:(\w+)-->/);
                try{
                    output.varname = varnameTemp[1];
                }catch(e){
                    output.varname = output.fileName;
                }

                // 文件内容
                // filecontentTemp = filecontentTemp.replace(/\\/g, '\\\\').replace(/\'/g, '\\\'').replace(/\n\s*\n/g, '\n').replace(/\n/g, '').replace(/<!-(.*)->/g, '').replace(/\>(.*)\</g, '');
                if(options.compress){
                    filecontentTemp = HtmlCompress.compress(filecontentTemp,{});
                    filecontentTemp = filecontentTemp.replace(/\\/g, '\\\\').replace(/\'/g, '\\\'').replace(/\n/g, ''); 
                }else{
                    filecontentTemp = filecontentTemp.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\'/g, '\\\'').replace(/\n\s*\n/g, '\n').replace(/\n/g, '\'\t\n\t+\'');
                }
            
                output.fileContent = (output.varname+'=\'' + filecontentTemp + '\';');
               
                // console.log(fileContent);
                grunt.file.write(f.dest+output.fileName+'.js', output.fileContent, {
                    encoding: options.encoding
                });
                grunt.log.writeln('File "' + f.dest+output.fileName+'.js" created.');
            });

        });
    });
};