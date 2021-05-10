<?php
/**
 * @file
 * Default theme implementation to display a single Drupal page.
 *
 * The doctype, html, head and body tags are not in this template. Instead they
 * can be found in the html.tpl.php template in this directory.
 *
 * Available variables:
 *
 * General utility variables:
 * - $base_path: The base URL path of the Drupal installation. At the very
 *   least, this will always default to /.
 * - $directory: The directory the template is located in, e.g. modules/system
 *   or themes/bartik.
 * - $is_front: TRUE if the current page is the front page.
 * - $logged_in: TRUE if the user is registered and signed in.
 * - $is_admin: TRUE if the user has permission to access administration pages.
 *
 * Site identity:
 * - $front_page: The URL of the front page. Use this instead of $base_path,
 *   when linking to the front page. This includes the language domain or
 *   prefix.
 * - $logo: The path to the logo image, as defined in theme configuration.
 * - $site_name: The name of the site, empty when display has been disabled
 *   in theme settings.
 * - $site_slogan: The slogan of the site, empty when display has been disabled
 *   in theme settings.
 *
 * Navigation:
 * - $main_menu (array): An array containing the Main menu links for the
 *   site, if they have been configured.
 * - $secondary_menu (array): An array containing the Secondary menu links for
 *   the site, if they have been configured.
 * - $breadcrumb: The breadcrumb trail for the current page.
 *
 * Page content (in order of occurrence in the default page.tpl.php):
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title: The page title, for use in the actual HTML content.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 * - $messages: HTML for status and error messages. Should be displayed
 *   prominently.
 * - $tabs (array): Tabs linking to any sub-pages beneath the current page
 *   (e.g., the view and edit tabs when displaying a node).
 * - $action_links (array): Actions local to the page, such as 'Add menu' on the
 *   menu administration interface.
 * - $feed_icons: A string of all feed icons for the current page.
 * - $node: The node object, if there is an automatically-loaded node
 *   associated with the page, and the node ID is the second argument
 *   in the page's path (e.g. node/12345 and node/12345/revisions, but not
 *   comment/reply/12345).
 *
 * Regions:
 * - $page['help']: Dynamic help text, mostly for admin pages.
 * - $page['highlighted']: Items for the highlighted content region.
 * - $page['content']: The main content of the current page.
 * - $page['sidebar_first']: Items for the first sidebar.
 * - $page['sidebar_second']: Items for the second sidebar.
 * - $page['header']: Items for the header region.
 * - $page['footer']: Items for the footer region.
 *
 * @see bootstrap_preprocess_page()
 * @see template_preprocess()
 * @see template_preprocess_page()
 * @see bootstrap_process_page()
 * @see template_process()
 * @see html.tpl.php
 *
 * @ingroup templates
 */
?>


<?php 
/* СНИППЕТЫ ДЛЯ РАБОТЫ !
<?php if ($is_admin): ?><!-- BLOCK::Телефоны шапка (главная) --><?php endif ?>

    для вывода блока
<?php
  $block = _block_get_renderable_array(_block_render_blocks(array(block_load('block', 15))));
  print drupal_render($block);
?>

    для вывода региона
<?php print render($page['content']) ?>

*/

?>


<header class="header">
  <div class="container">
    <div class="col-xs-1 header--logo">
			<?php if ($is_admin): ?><!-- BLOCK::Лого компании в шапке --><?php endif ?>
			<?php
				$block = _block_get_renderable_array(_block_render_blocks(array(block_load('block', 1))));
				print drupal_render($block);
			?>
		</div>

		<div class="col-xs-4 header--menu"> 
			<?php print render($page['navigation']) ?>
			<div class="menu-address"><p>г. Челябинск, ул. Короленко, 36</p>
			<p><a class="mobile-mail" href="mailto:e-t-o@mail.ru">e-t-o@mail.ru</a></p>
			<p><a class="mobile-phone" href="tel:+73512398290">+7 (351) 239-82-90</a></p>
			</div>
		</div>
		<div class="header--contacts">

			<div class="header-contacts--subcontainer">
				<div class="col-xs-2 header--mail"> 
					<?php if ($is_admin): ?><!-- BLOCK::Почта в шапке --><?php endif ?>
					<?php
						$block = _block_get_renderable_array(_block_render_blocks(array(block_load('block', 3))));
						print drupal_render($block);
					?>
				</div>

				<div class="col-xs-2 header--phone"> 
					<?php if ($is_admin): ?><!-- BLOCK::Телефон в шапке --><?php endif ?>
					<?php
						$block = _block_get_renderable_array(_block_render_blocks(array(block_load('block', 4))));
						print drupal_render($block);
					?>
				</div>
			</div>

			<div class="col-xs-3 header--address"> 
				<?php if ($is_admin): ?><!-- BLOCK::Адрес в шапке --><?php endif ?>
				<?php
					$block = _block_get_renderable_array(_block_render_blocks(array(block_load('block', 2))));
					print drupal_render($block);
				?>
			</div>

			<div class="header--socials"> 
				<?php if ($is_admin): ?><!-- BLOCK::Соцсети в шапке --><?php endif ?>
				<?php
					$block = _block_get_renderable_array(_block_render_blocks(array(block_load('block', 14))));
					print drupal_render($block);
				?>
			</div>


		</div>
		<div id="lang-switcher" class="lang-switcher">
				<ul>
					<li><a id="RUru" href="http://eto74.ru/">RU</a></li>
					<li><a id="ENen" href="http://en.eto74.ru/">EN</a></li>
				</ul>
			</div>
		<div class="col-xs-2 header--burger"> 
			<?php if ($is_admin): ?><!-- BLOCK::Бургер-кнопка --><?php endif ?>
			<button class="burger-button"></button>
		</div>
    </div>
</header>

<?php if(!empty($page['highlighted'])): ?>
  <section class="highlighted">

  	<?php $block = module_invoke('views', 'block_view', 'banner_main_view_img-block');
	echo "<h2>" . $block['subject'] . "</h2>";
	print render ($block['content']); ?>

    <div class="container">
      <?php print render($page['highlighted']) ?>
			
    </div>
		
  </section>
<?php endif; ?>





<main role="main" class="main--content">
    <!-- region - content -->
		<?php if (!empty($breadcrumb)): print $breadcrumb; endif;?>
		<?php print $messages; ?>
		<?php if (!empty($tabs)): ?>
			<?php print render($tabs); ?>
		<?php endif; ?>
		<?php if (!$is_front): ?>
 	  <h1><?php echo $title ?></h1>
		<?php endif ?>
		<?php print render($page['content']) ?>
		
</main>

<footer class="footer">
	<div class="container">
		<div class="row footer--line1">
		<!-- для row дополнительный класс -->
			<div class="col-xs-8">
					<?php print render($page['hidden']) ?>
			</div> 

			<div class="col-xs-4">			
				<?php if ($is_admin): ?><!-- BLOCK::Лого компании в подвале --><?php endif ?>
				<?php
					$block = _block_get_renderable_array(_block_render_blocks(array(block_load('block', 1))));
					print drupal_render($block);
				?>
				<?php if ($is_admin): ?><!-- BLOCK::Контакты + соцсети в подвале --><?php endif ?>
				<?php
					$block = _block_get_renderable_array(_block_render_blocks(array(block_load('block', 7))));
					print drupal_render($block);
				?>
			</div>
		</div>

		<div class="row footer--line2">
			<div class="col-xs-3 footer--copyright">
				<!-- php date("Y") -->
				<?php if ($is_admin): ?><!-- BLOCK::Авторские права --><?php endif ?>
				<?php
					$block = _block_get_renderable_array(_block_render_blocks(array(block_load('block', 8))));
					print drupal_render($block);
				?>
				<?php echo (date(" Y ")); ?>
			</div>

			<div class="col-xs-5 footer--agreement">
				<?php if ($is_admin): ?><!-- BLOCK::Пользовательское соглашение --><?php endif ?>
				<?php
					$block = _block_get_renderable_array(_block_render_blocks(array(block_load('block', 9))));
					print drupal_render($block);
				?>
			</div>

			<div class="col-xs-4 footer--logo_ribbla">
				<a href="https://ribbla.com" target="_blank"><img src="/sites/all/themes/main_theme/images/logo_ribbla.png"></a>
			</div>
		</div>
    </div>
</footer>


<div class="container">
<!-- Modal -->
<div class="modal fade" id="write_us" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Свяжитесь с нами</h4>
        </div>
        <div class="modal-body">
          <p>
          <?php $block = module_invoke('webform', 'block_view', 'webform-client-form-43');
print render($block['content']); ?>
          </p>
        </div>
        
      </div>
      
    </div>
  </div>

</div>