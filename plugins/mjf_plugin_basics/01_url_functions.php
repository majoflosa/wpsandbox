<?php 

// Local path to plugin files
	// Outputs: C:\wamp\www\experimentwp\wp-content\plugins\mjf_plugin basics/
	echo 'plugin_dir_path: ' . plugin_dir_path( __FILE__ ) . '<br>';

	// Full local server path to current file
	// Output: C:\wamp\www\experimentwp\wp-content\plugins\mjf_plugin basics\index.php
	echo '__FILE__: ' . __FILE__ . '<br>';
	
	// Full plugins directory URL
	// Output: http://localhost/experimentwp/wp-content/plugins/mjf_plugin basics/some-folder/
	// Output (no __FILE__): http://localhost/experimentwp/wp-content/plugins/some-folder/
	echo 'plugins_url: ' . plugins_url( 'some-folder/', __FILE__ ) . '<br>';

	// Full plugins directory URL
	// Output: http://localhost/experimentwp/wp-includes/some-folder/
	echo 'includes_url: ' . includes_url( 'some-folder/' ) . '<br>';

	// Full content directory URL
	// Output: http://localhost/experimentwp/wp-content/some-folder/
	echo 'content_url: ' . content_url( 'some-folder/' ) . '<br>';

	// Full admin directory URL
	// Output: http://localhost/experimentwp/wp-content/some-folder/
	echo 'admin_url: ' . admin_url( 'some-folder/' ) . '<br>';

?>