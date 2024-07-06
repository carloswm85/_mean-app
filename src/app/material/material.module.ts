import { NgModule } from '@angular/core';

/* ================================ MATERIAL ================================ */
// Importing Angular Material modules individually
// Each import provides a specific UI component from Angular Material

// Autocomplete input module
import { MatAutocompleteModule } from '@angular/material/autocomplete';

// Badge module for displaying badges
import { MatBadgeModule } from '@angular/material/badge';

// Button module for standard buttons
import { MatButtonModule } from '@angular/material/button';

// Button toggle module for toggle buttons
import { MatButtonToggleModule } from '@angular/material/button-toggle';

// Card module for material design card containers
import { MatCardModule } from '@angular/material/card';

// Checkbox module for checkboxes
import { MatCheckboxModule } from '@angular/material/checkbox';

// Chips module for material design chips
import { MatChipsModule } from '@angular/material/chips';

// Common module for common material components
import { MatCommonModule } from '@angular/material/core';

// Datepicker module for date picking
import { MatDatepickerModule } from '@angular/material/datepicker';

// Dialog module for modal dialogs
import { MatDialogModule } from '@angular/material/dialog';

// Divider module for dividers
import { MatDividerModule } from '@angular/material/divider';

// Expansion panel module for expandable panels
import { MatExpansionModule } from '@angular/material/expansion';

// Form field module for form fields
import { MatFormFieldModule } from '@angular/material/form-field';

// Grid list module for grid layouts
import { MatGridListModule } from '@angular/material/grid-list';

// Icon module for material design icons
import { MatIconModule } from '@angular/material/icon';

// Input module for input fields
import { MatInputModule } from '@angular/material/input';

// List module for lists
import { MatListModule } from '@angular/material/list';

// Menu module for material design menus
import { MatMenuModule } from '@angular/material/menu';

// Paginator module for pagination controls
import { MatPaginatorModule } from '@angular/material/paginator';

// Progress bar module for progress bars
import { MatProgressBarModule } from '@angular/material/progress-bar';

// Progress spinner module for loading spinners
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Radio button module for radio buttons
import { MatRadioModule } from '@angular/material/radio';

// Ripple module for ripple effects
import { MatRippleModule } from '@angular/material/core';

// Select module for dropdown selectors
import { MatSelectModule } from '@angular/material/select';

// Sidenav module for side navigation panels
import { MatSidenavModule } from '@angular/material/sidenav';

// Slide toggle module for slide toggles
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// Slider module for sliders
import { MatSliderModule } from '@angular/material/slider';

// Snackbar module for snack-bar notifications
import { MatSnackBarModule } from '@angular/material/snack-bar';

// Sort module for sorting tables
import { MatSortModule } from '@angular/material/sort';

// Stepper module for stepper components
import { MatStepperModule } from '@angular/material/stepper';

// Table module for material design tables
import { MatTableModule } from '@angular/material/table';

// Tabs module for tabbed interfaces
import { MatTabsModule } from '@angular/material/tabs';

// Toolbar module for toolbars
import { MatToolbarModule } from '@angular/material/toolbar';

// Tree module for tree structures
import { MatTreeModule } from '@angular/material/tree';

// Tooltip module for tooltips
import { MatTooltipModule } from '@angular/material/tooltip';

/* ================================== CDK =================================== */
// Importing Angular CDK modules individually
// Each import provides a specific utility from Angular CDK

// A11y (Accessibility) module for accessibility features
import { A11yModule } from '@angular/cdk/a11y';

// Bidi (Bi-directional) module for supporting bi-directional text
import { BidiModule } from '@angular/cdk/bidi';

// Observers module for observing element changes
import { ObserversModule } from '@angular/cdk/observers';

// Overlay module for overlay elements
import { OverlayModule } from '@angular/cdk/overlay';

// Platform module for platform-specific utilities
import { PlatformModule } from '@angular/cdk/platform';

// Portal module for dynamically loading components
import { PortalModule } from '@angular/cdk/portal';

// CdkStepper module for stepper components
import { CdkStepperModule } from '@angular/cdk/stepper';

// CdkTable module for table components
import { CdkTableModule } from '@angular/cdk/table';

// CdkTree module for tree components
import { CdkTreeModule } from '@angular/cdk/tree';

// Drag and drop module for drag-and-drop functionality
import { DragDropModule } from '@angular/cdk/drag-drop';

/**
 * NgModule that includes all Material modules.
 *Defining an Angular module that exports all the imported Material and CDK modules
 */
@NgModule({
  exports: [
    // CDK
    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    // Material
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatCommonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTreeModule,
    MatTooltipModule,
  ],
})
export class MaterialModule {}
